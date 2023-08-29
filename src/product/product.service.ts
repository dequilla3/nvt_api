import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/model/product.entity';
import { Repository } from 'typeorm';
import { ProductCatService } from 'src/product-cat/product-cat.service';
import { SkuService } from 'src/sku/sku.service';
import { ProductUnitService } from 'src/product-unit/product-unit.service';
import { ProductInterface } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private productCatService: ProductCatService,
    private skuService: SkuService,
    private productUnitService: ProductUnitService,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(product: ProductInterface) {
    const productCat = await this.productCatService.fineOneById(
      product.productCatId,
    );

    // init product
    const productToPost = new Product();
    productToPost.productCat = productCat;
    productToPost.productCode = product.productCode;
    productToPost.productName = product.productName;

    //save product
    const createProduct = this.productRepository.create(productToPost);
    const saveProduct = await this.productRepository.save(createProduct);

    //generate skucode
    const numPadStrt = (num) => String(num).padStart(3, '0');
    const generateSkuCode = `${product.productCode}-${numPadStrt(
      product.productCatId,
    )}-${numPadStrt(saveProduct.id)}`.trim();

    const getProdUnitByUnit = await this.productUnitService.findOneByUnit(
      product.unit,
    );

    const createSku = await this.skuService.create(
      generateSkuCode,
      saveProduct,
      getProdUnitByUnit,
    );

    return { product: saveProduct, sku: createSku };
  }
}
