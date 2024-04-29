import express from 'express';
import { urlModel } from '../model/shortUrl';

export const createUrl= async(
    req:express.Request,
    res:express.Response
)=>{
    try {
        console.log("fullUrl:",req.body.fullUrl)
        const {fullUrl}=req.body
        const urlFound =await urlModel.findOne({fullUrl})
        
        if(urlFound)
            {
                res.status(409);
                res.send(urlFound)
            }
            else{
                const shortUrl =await  urlModel.create({fullUrl})
                res.status(201).send(shortUrl);
            }
    } catch (error) {
        res.status(500).send({"message":"Somethng went wrong"})
    }
}

export const getAllUrl= async(
    req:express.Request,
    res:express.Response
)=>{
    try {
        const shortUrls=await urlModel.find();
        if(shortUrls.length===0)
            {
                res.status(404).send({message:"Short url not found!"})
            }
        else{
            res.status(200).send(shortUrls)
        }
    } catch (error) {
        res.status(500).send({"message":"Somethng went wrong"})
    }
}

export const getUrl= async(
    req:express.Request,
    res:express.Response
)=>{
    try {
        const {id}=req.params
        const shortUrl= await urlModel.findOne({shortUrl: id})
        if(shortUrl)
        {
            let url = shortUrl.fullUrl
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(url)    
        }
        else
        {
            res.status(404).send({message:"No short Url exist!"})
        }
    } catch (error) {
        
        res.status(500).send({"message":"Somethng went wrong"})
    }

}
export const deleteUrl= async(
    req:express.Request,
    res:express.Response
)=>{
    try {
        const {id}=req.params
        console.log(id)
        const shortUrl= await urlModel.findByIdAndDelete({_id:id})
        if(shortUrl)
        {
        res.status(200).send({messsage:"Successfully deleted the url"})
        }
    } catch (error) {
        
        res.status(500).send({"message":"Somethng went wrong"})
    }

}