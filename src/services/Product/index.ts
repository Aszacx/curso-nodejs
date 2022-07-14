import ProductService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await ProductService.findAll();
}

export async function save(data: any): Promise < any[] > {
    return await ProductService.save(data);
}