import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menus } from '../../interfaces/menus';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-register-clothe',
  standalone: false,
  templateUrl: './register-clothe.component.html',
  styleUrl: './register-clothe.component.scss',
})
export class RegisterClotheComponent implements OnInit {
  public registerClotheForm: FormGroup = <FormGroup>{};
  public menus: Menus[] = [];

  previewImage: string | undefined = '';
  previewVisible = false;

  constructor(
    private fb: FormBuilder,
    private sidebarService: SidebarService,
  ) {}
  
  ngOnInit(): void {
    this.menus = this.sidebarService.menus;
    this.inicializeForm();
  }

  private inicializeForm() {
    this.registerClotheForm = this.fb.group({
      image: [''],
      secao: ['', [Validators.required]],
    });
  }

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };
}
