
import axios from 'axios';
const BASE_URL = `https://ss-nova.myshopify.com/api/graphql.json`;
const ShopifyHeaderValue = '6ccc4763034a375291c6a8e000049596';


export const GetCollectionsProduct = (params) => {

    const data = {
        query: `{
            products(first: ${params.limitProduct}) {
              edges {
                node {
                    id 
                    title
                    handle 
                    description 
                    vendor
                    images(first: 5) {
                        edges {
                            node {
                                id
                                altText
                                originalSrc 
                                transformedSrc(maxWidth: 350, scale: 1)
                            }
                        }
                    }
                    variants(first:5){
                        edges{
                          node{
                            id
                            title
                            sku 
                            compareAtPrice
                            price 
                            selectedOptions{
                              name
                              value
                            }
                          }
                        }
                    }
                   
                }
              }
             
            }
        }`
    };
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'X-Shopify-Storefront-Access-Token': ShopifyHeaderValue,
            'Content-Type': 'application/json',
        }
    });


    const getDataCollections = instance.post(null, data).then(response => {

        if (response.data) {

            const collections = response.data.data.products.edges;
            //const productVariants = response.data;

            let collectionsList = collections.map((result, index) => {
                const nodes = result.node;
                const images = nodes.images.edges;
                const variants = nodes.variants.edges;

                const allimages = images.map((result, index) => {
                    const nodes = result.node;
                    const imagePath = nodes.transformedSrc;
                    return {
                        _imagePath: `${imagePath}`
                    };

                });

                const allvariants = variants.map((result, index) => {
                    const nodes = result.node;

                    const price = nodes.price;
                    const compareAtPrice = nodes.compareAtPrice;
                    return {
                        _price: `${price}`,
                        _compareAtPrice: `${compareAtPrice}`
                    };

                });

                return {
                    _id: `${nodes.id}`,
                    _handle: `${nodes.handle}`,
                    _title: `${nodes.title}`,
                    _description: `${nodes.description.substr(0, 120)}`,
                    _price: `${allvariants[0]._price}`,
                    _compareAtPrice: `${allvariants[0]._compareAtPrice}`,
                    _image: `${allimages[0]._imagePath}`,
                    _image2: `${allimages[1]._imagePath}`

                };

            });

            return collectionsList;
        }

    })

    return getDataCollections;

}

export const GetCollectionsitems = (params) => {

    const data = {
        query: `
        {collectionByHandle(handle: "${params.id}") {
             
              id
              description
                title
                image{
                id
                originalSrc
                transformedSrc
              }
              products(first: ${params.limitProduct} ) {
                edges {
                  node {
                    id 
                title
                handle 
                vendor
                images(first: 2) {
                  edges {
                    node {
                      id
                      altText
                      originalSrc 
                      transformedSrc(maxWidth: 350, scale: 1)
                    }
                  }
                }
                variants(first:5){
                    edges{
                        node{
                            id
                            title
                            sku 
                            compareAtPrice
                            price 

                            selectedOptions{
                                name
                                value
                            }
                        }
                    }
                }
                  }
                  cursor
                }
                pageInfo {
                  hasNextPage
                }
              }
            }
        
        }`
    };
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'X-Shopify-Storefront-Access-Token': ShopifyHeaderValue,
            'Content-Type': 'application/json',
        }
    });


    const getDataCollections = instance.post(null, data).then(response => {

        if (response.data.data.collectionByHandle != null) {

            const collectionsProducts = response.data.data.collectionByHandle.products.edges;
            const collectionsInfor = response.data.data.collectionByHandle;

            let collectionsList = collectionsProducts.map((result, index) => {
                const nodes = result.node;
                const images = nodes.images.edges;
                const variants = nodes.variants.edges;

                const allimages = images.map((result, index) => {
                    const nodes = result.node;
                    const imagePath = nodes.transformedSrc;
                    return {
                        _imagePath: `${imagePath}`
                    };

                });

                const allvariants = variants.map((result, index) => {
                    const nodes = result.node;

                    const price = nodes.price;
                    const compareAtPrice = nodes.compareAtPrice;
                    return {
                        _price: `${price}`,
                        _compareAtPrice: `${compareAtPrice}`
                    };

                });


                return {
                    _id: `${nodes.id}`,
                    _handle: `${nodes.handle}`,
                    _title: `${nodes.title}`,
                    _description: `${nodes.description}`,
                    _price: `${allvariants[0]._price}`,
                    _compareAtPrice: `${allvariants[0]._compareAtPrice}`,
                    _image: `${allimages[0]._imagePath}`,
                    _image2: `${allimages[1]._imagePath}`

                };

            });

            return {
                collection: {
                    _collectionTitle: `${collectionsInfor.title}`,
                    _collectionDesc: `${collectionsInfor.description}`
                },
                product: collectionsList

            };


        }else{
            return '';
        }

    })

    return getDataCollections;

}

export const GetProductDetail = (params) => {

    const data = {
        query: `{
            productByHandle(handle: "${params.id}"){
                id
                title
                handle
                productType
               
                tags
                createdAt
                description
                descriptionHtml
                
                collections(first: 5) {
                    edges {
                        node {
                        handle
                        }
                    }
                }
                images(first: 5) {
                    edges {
                        node {
                            id
                            altText
                            originalSrc 
                            transformedSrc 
                        }
                    }
                }
                options {
                    name
                }
                variants(first:5){
                    edges{
                        node{
                            id
                            title
                            sku 
                            compareAtPrice
                            price 
                            
                            selectedOptions{
                                name
                                value
                            }
                        }
                    }
                }
               
            }
          }`
    };
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'X-Shopify-Storefront-Access-Token': ShopifyHeaderValue,
            'Content-Type': 'application/json',
        }
    });


    const getDataProduct = instance.post(null, data).then(response => {

        if (response.data.data.productByHandle != null) {
            const product = response.data.data.productByHandle;
            const images = product.images.edges;
            const variants = product.variants.edges;

            const allimages = images.map((result, index) => {
                const nodes = result.node;
                const imagePath = nodes.transformedSrc;
                return {
                    _imagePath: `${imagePath}`
                };

            });

            const allvariants = variants.map((result, index) => {
                const nodes = result.node;

                const price = nodes.price;
                const compareAtPrice = nodes.compareAtPrice;
                return {
                    _price: `${price}`,
                    _compareAtPrice: `${compareAtPrice}`
                };

            });

            return {
                _id: `${product.id}`,
                _handle: `${product.handle}`,
                _title: `${product.title}`,
                _description: `${product.descriptionHtml}`,
                _productType: `${product.productType}`,
                _tags: `${product.tags}`,
                _image: `${allimages[0]._imagePath}`,
                _price: `${allvariants[0]._price}`,
                _compareAtPrice: `${allvariants[0]._compareAtPrice}`

            };
        }else{
            return '';
        }

    })

    return getDataProduct;

}

export const GetTagsProduct = (params) => {

    const data = {
        query: `{
            products(first: ${params.limitProduct}) {
              edges {
                node {
                    id 
                    title
                    handle 
                    description 
                    vendor
                    tags
                    images(first: 1) {
                        edges {
                            node {
                                id
                                altText
                                originalSrc 
                                transformedSrc(maxWidth: 335, scale: 1)
                            }
                        }
                    }
                    variants(first:5){
                        edges{
                          node{
                            id
                            title
                            sku 
                            compareAtPrice
                            price 
                            selectedOptions{
                              name
                              value
                            }
                          }
                        }
                        }
                   
                    }
                }
             
            }
        }`
    };
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'X-Shopify-Storefront-Access-Token': ShopifyHeaderValue,
            'Content-Type': 'application/json',
        }
    });


    const getDataCollections = instance.post(null, data).then(response => {

        if (response.data) {

            const collections = response.data.data.products.edges;
            //const productVariants = response.data;

            let collectionsList = collections.map((result, index) => {
                const nodes = result.node;
                const images = nodes.images.edges;
                const variants = nodes.variants.edges;
                const tags = nodes.tags;

                const allimages = images.map((result, index) => {
                    const nodes = result.node;
                    const imagePath = nodes.transformedSrc;
                    return {
                        _imagePath: `${imagePath}`
                    };

                });

                const allvariants = variants.map((result, index) => {
                    const nodes = result.node;

                    const price = nodes.price;
                    const compareAtPrice = nodes.compareAtPrice;
                    return {
                        _price: `${price}`,
                        _compareAtPrice: `${compareAtPrice}`
                    };

                });

                let dateDeal = '';
                tags.map((result, index) => {
                    const itemtag = result.split(' ');
                    if(itemtag.length > 1 && itemtag[0] === "deal"){
                        return dateDeal = itemtag[1];
                    }else{
                        return null;
                    }
                });


                //const tag_deal = allTags.split(',');
                return {
                    _id: `${nodes.id}`,
                    _handle: `${nodes.handle}`,
                    _deal: `${dateDeal}`,
                    _title: `${nodes.title}`,
                    _description: `${nodes.description.substr(0, 120)}`,
                    _price: `${allvariants[0]._price}`,
                    _compareAtPrice: `${allvariants[0]._compareAtPrice}`,
                    _image: `${allimages[0]._imagePath}`

                };

            });

            return collectionsList;
        }

    })

    return getDataCollections;

}
export const GetSearchProduct = (params) => {

    const data = {
        query: `{
            products(query: "title:*${params.title}*", first: ${params.totalProduct}) {
              edges {
                node {
                    id 
                    title
                    handle 
                    description 
                    vendor
                    images(first: 5) {
                        edges {
                            node {
                                id
                                altText
                                originalSrc 
                                transformedSrc(maxWidth: 280, scale: 1)
                            }
                        }
                    }
                    variants(first:5){
                        edges{
                          node{
                            id
                            title
                            sku 
                            compareAtPrice
                            price 
                            selectedOptions{
                              name
                              value
                            }
                          }
                        }
                        }
                   
                    }
                    }
             
            }
        }`
    };
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'X-Shopify-Storefront-Access-Token': ShopifyHeaderValue,
            'Content-Type': 'application/json',
        }
    });


    const getDataCollections = instance.post(null, data).then(response => {

        if (response.data) {

            const collections = response.data.data.products.edges;
            //const productVariants = response.data;

            let collectionsList = collections.map((result, index) => {
                const nodes = result.node;
                const images = nodes.images.edges;
                const variants = nodes.variants.edges;

                const allimages = images.map((result, index) => {
                    const nodes = result.node;
                    const imagePath = nodes.transformedSrc;
                    return {
                        _imagePath: `${imagePath}`
                    };

                });

                const allvariants = variants.map((result, index) => {
                    const nodes = result.node;

                    const price = nodes.price;
                    const compareAtPrice = nodes.compareAtPrice;
                    return {
                        _price: `${price}`,
                        _compareAtPrice: `${compareAtPrice}`
                    };

                });

                return {
                    _id: `${nodes.id}`,
                    _handle: `${nodes.handle}`,
                    _title: `${nodes.title}`,
                    _description: `${nodes.description.substr(0, 120)}`,
                    _price: `${allvariants[0]._price}`,
                    _compareAtPrice: `${allvariants[0]._compareAtPrice}`,
                    _image: `${allimages[0]._imagePath}`

                };

            });

            return collectionsList;
        }

    })

    return getDataCollections;

}


fetchProducts();
export function fetchProducts() {

    const getData = fetch('https://ss-nova.myshopify.com/api/graphql.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'de43hhirgkxk15jik0yu8crpj6vczmy'
        },
        body: JSON.stringify({
            query: `
            query MyFirstQuery {
            site {
                settings {
                storeName
                }
                products {
                edges {
                    node {
                      name
                      sku
                      prices {
                        retailPrice {
                          value
                          currencyCode
                        }
                        price {
                          value
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
            `
        }),
    })
        .then(response =>{
            console.log(response);

        })
    return getData;
}


