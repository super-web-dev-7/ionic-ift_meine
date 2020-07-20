import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController} from '@ionic/angular';
import {HttpService} from '../../../../providers/http/http.service';

@Component({
    selector: 'app-code-register',
    templateUrl: './code-register.component.html',
    styleUrls: ['./code-register.component.scss'],
})
export class CodeRegisterComponent implements OnInit {

    public onRegisterForm: FormGroup;


    constructor(
        public formBuilder: FormBuilder,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        public httpRequest: HttpService,
    ) { }

    ngOnInit() {
        this.onRegisterForm = this.formBuilder.group({
            name: [null, Validators.compose([
                Validators.required
            ])],
            isAdmin: ['0', Validators.compose([Validators.required])]
        });
    }

    get f() {
        return this.onRegisterForm.controls;
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async addCode() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            code: this.f.name.value,
            isAdmin: this.f.isAdmin.value,
            type: 'alphanumeric'
        };
        console.log(data)

        this.httpRequest.addCode(data).subscribe(result => {
            this.modalCtrl.dismiss(data);
        });

        loader.onWillDismiss().then(() => {
        });
    }

}
