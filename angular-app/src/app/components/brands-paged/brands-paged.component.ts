import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { PagedViewModel } from 'src/app/models/paged-view-model';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands-paged',
  templateUrl: './brands-paged.component.html',
  styleUrls: ['./brands-paged.component.scss'],
})
export class BrandsPagedComponent implements OnInit {
  constructor(
    private brandsService: BrandsService,
    private activatedRoute: ActivatedRoute
  ) {}

  viewModel: PagedViewModel<Brand> = {} as PagedViewModel<Brand>;

  pageIndex: number = 0;
  pageSize: number = 0;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      if (param['pageIndex'] != null && param['pageSize'] != null) {
        this.pageIndex = param['pageIndex'];
        this.pageSize = param['pageSize'];

        this.brandsService.getBrands(this.pageIndex, this.pageSize).subscribe(
          (data) => {
            console.log(data);
            this.viewModel = data;
          },
          (error) => {
            alert(error);
          }
        );
      } else {
        this.brandsService.getBrands().subscribe(
          (data) => {
            console.log(data);
            this.viewModel = data;
          },
          (error) => {
            alert(error);
          }
        );
      }
    });
  }
}
