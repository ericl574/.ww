"use server"
import { scrapAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl:string){
    if(!productUrl)return;
    try{
        const scrapedProduct=await scrapAmazonProduct(productUrl);

    }catch(error:any){
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}