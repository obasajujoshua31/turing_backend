import models from '../models';
import BaseService from './base';


const { product_attribute, attribute_value, attribute } = models;

export default class ProductAttributeService extends BaseService {
    static async getAllAttributeValues(id) {
        return await this.findAll(product_attribute, { where: {
            product_id: id
        },
        include: [{
            model: attribute_value,
              include: [{
                model: attribute
            }]
        }]
     });
    }
}
