import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/model/product.entity';
import { Repository } from 'typeorm';
import { ProductCatService } from 'src/product-cat/product-cat.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private productCatService: ProductCatService,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(product) {
    const productCat = await this.productCatService.fineOneById(
      product.productCatId,
    );
    
    const productToPost = new Product();
    productToPost.productCat = productCat;
    productToPost.productCode = product.productCode;
    productToPost.productName = product.productCatId;

    const createProduct = this.productRepository.create(productToPost);
    return this.productRepository.save(createProduct);
  }
}
