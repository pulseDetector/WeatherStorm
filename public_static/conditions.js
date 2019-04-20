$(function () {
    var date=new Date().getDate();
    console.log(date);

    $.get("/currcond",(data)=>{
        console.log("Sastriyakal");
        $("#placediv").prepend(data[1].nameofp);
        $("#placediv").append(data[0].WeatherText);
        console.log(data[0].WeatherIcon);
        if(data[0].WeatherIcon-10<0){
            data[0].WeatherIcon="0"+data[0].WeatherIcon;
            console.log("in the condition");
        }
        console.log(data[0].WeatherIcon);
        $("#weather-icon").attr('src',`https://developer.accuweather.com/sites/default/files/${data[0].WeatherIcon}-s.png`)
        $("#temp").append(data[0].Temperature.Metric.Value+"°"+data[0].Temperature.Metric.Unit);
        $("#realFeel").append(data[0].RealFeelTemperature.Metric.Value+"°"+data[0].RealFeelTemperature.Metric.Unit);
        $("#humid").append(data[0].RelativeHumidity+"%");
        $("#uv-idx").append(data[0].UVIndex);
        $("#vis").append(data[0].Visibility.Metric.Value+" "+data[0].Visibility.Metric.Unit);
        $("#cc").append(data[0].CloudCover+"%");
        $("#press").append(data[0].Pressure.Metric.Value+" "+data[0].Pressure.Metric.Unit);
    })
    $("#sec-div").find("*").css('visibility','hidden');
    $("#go").click(()=>{

        $(".forremov").children('span').remove();
            $.get("/forecasts",(data)=>{
                var day=$("#select-day").val();
                var idx=day-date;
                console.log(JSON.stringify(data));
                console.log(day-date);
                $("#min").append(`<span>${data[idx].Temperature.Minimum.Value}°${data[idx].Temperature.Minimum.Unit}</span>`);
                $("#max").append(`<span>${data[idx].Temperature.Maximum.Value}°${data[idx].Temperature.Maximum.Unit}</span>`);
                $("#day").append(`<span>${data[idx].Day.IconPhrase} </span>`);
                $("#nig").append(`<span>${data[idx].Night.IconPhrase} </span>`);
                var icond=data[idx].Day.Icon;
                var iconn=data[idx].Night.Icon;
                if(icond-10<0){
                    icond="0"+icond;
                    console.log("in the condition");
                }
                $("#day-img").attr('src',`https://developer.accuweather.com/sites/default/files/${icond}-s.png`);
                $("#nig-img").attr('src',`https://developer.accuweather.com/sites/default/files/${iconn}-s.png`);
            })
        $("#sec-div").find("*").css('visibility','visible');

    })
})