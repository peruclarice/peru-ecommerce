import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-remove-from-cart',
  templateUrl: './remove-from-cart.component.html',
  styleUrls: ['./remove-from-cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
	styles: [
		`
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
	],
})

export class RemoveFromCartComponent {
  faTrash = faTrash;

  closeResult: string | undefined;

	constructor(private modalService: NgbModal) {}

	openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openSm(content: any) {
		this.modalService.open(content, { size: 'sm' });
	}

	openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

	openXl(content: any) {
		this.modalService.open(content, { size: 'xl' });
	}

	openFullscreen(content: any) {
		this.modalService.open(content, { fullscreen: true });
	}

	openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

	openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}

	openModalDialogCustomClass(content: any) {
		this.modalService.open(content, { modalDialogClass: 'dark-modal' });
	}
}
