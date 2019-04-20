const express=require("express");
const routes=express.Router();
const request=require("request");
var locationKey;
// const apikey="DENVoTy5inYZyWAubqGjwrcJ99tvd2Ch";
const apikey="byspveicsmixbGcBPrkaYM9IwR7DIYsO";
var place;
routes.post("/locateKey",(req,res)=>{
    console.log(req.body.place);
    place={nameofp :req.body.place};
        request.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${req.body.place}`,(error,response,body)=>{
            // console.log(response.body);
            var boo=JSON.parse(response.body);
            locationKey=`${boo[0].Key}`;
            console.log(locationKey);
        })
})


routes.get("/currcond",(req,res)=>{
    console.log(locationKey+" 2nd one");
    request.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}&details=true`,(error,response,body)=>{
    console.log(locationKey+" 3rd one")
        var cca=JSON.parse(response.body);
        console.log(response.body);
        cca.push(place);
        console.log(JSON.stringify(cca));
        res.send(cca);
    })
})

routes.get("/forecasts",(req,res)=>{
    request.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apikey}&metric=true`,(error,response,body)=>{
        console.log(response.body);
        var ffd=JSON.parse(response.body);
        res.send(ffd.DailyForecasts);
    })
})


module.exports= routes;