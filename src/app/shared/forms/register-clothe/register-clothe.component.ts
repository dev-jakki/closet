import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menus } from '../../interfaces/menus';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

const MAX_MB_SIZE = 2.5;

@Component({
  selector: 'app-register-clothe',
  standalone: false,
  templateUrl: './register-clothe.component.html',
  styleUrl: './register-clothe.component.scss',
})
export class RegisterClotheComponent implements OnInit {
  @ViewChild('file') public inputFileComponent!: ElementRef<HTMLInputElement>;
  private imageBase64: string | undefined;
  public imageSelected: string | undefined =
    'https://st.depositphotos.com/3538103/5151/i/450/depositphotos_51514387-stock-photo-photograph-icon.jpg';

  public registerClotheForm: FormGroup = <FormGroup>{};
  public menus: Menus[] = [];
  public menusOptions: Menus[] = [];
  public clotheOptions = [
    { text: 'Sim', value: 1 },
    { text: 'Não', value: 0 },
  ];

  constructor(
    private fb: FormBuilder,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.menusOptions = this.getMenusFreeChilds(this.sidebarService.menus);
    this.inicializeForm();
  }

  private inicializeForm() {
    this.registerClotheForm = this.fb.group({
      image: ['', [Validators.required]],
      limpa: ['', [Validators.required]],
      secao: ['', [Validators.required]],
    });
  }

  public changeFile() {
    const element = this.inputFileComponent?.nativeElement;
    const fileInfos = element?.['files']?.[0] as File;

    if (!fileInfos) return;

    const MbSizeValue = this.convertBytesToMB(fileInfos.size);

    const hasMaxSizeError = MbSizeValue > MAX_MB_SIZE;

    if (hasMaxSizeError) {
      return;
    }

    this.updateFileSrc(fileInfos);
  }

  private updateFileSrc(file: File) {
    if (!file) return;

    const newFile = new File([file], file.name, {
      type: file.type,
      lastModified: file.lastModified,
    });

    const reader = new FileReader();

    reader.readAsDataURL(newFile);

    reader.onload = () => {
      this.imageBase64 = reader.result?.toString();
      this.imageSelected = this.imageBase64;
    };
  }

  private convertBytesToMB(bytesValue: number): number {
    const convertedValue = bytesValue / (1024 * 1024);

    return convertedValue;
  }

  private getMenusFreeChilds(menus: Menus[]): Menus[] {
    const menusFreeChilds: Menus[] = [];

    menus.forEach((menu) => {
      if (menu.filhos === null || menu.filhos.length === 0) {
        menusFreeChilds.push(menu);
      } else {
        const filhosSemFilhos = this.getMenusFreeChilds(menu.filhos);
        menusFreeChilds.push(...filhosSemFilhos);
      }
    });

    return menusFreeChilds;
  }

  public addClothe() {}

  canCloseDrawer() {
    return true;
  }
}
