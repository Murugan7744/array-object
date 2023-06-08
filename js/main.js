let data=[
            {
                id:1,
                name:"tel",
                prize:"63000",
                color:"blue",
                stroge:"600gp"
            },
            {
                id:2,
                name:"sony",
                prize:"53000",
                color:"black",
                stroge:"500gp"
            },
            {
                id:3,
                name:"hp",
                prize:"48000",
                color:"white",
                stroge:"550gp"
            },
            {
                id:4,
                name:"lenovo",
                prize:"43000",
                color:"red",
                stroge:"450gp"
            }

        ]

        data.forEach(function(e){
                    if(e.prize<="43000"){
                        document.write(e ,"<br>");
                    }
                    else{
                        document.write("no stock" ,"<br>");
                    }

        })
document.write("<br>");



        let television=[
            {
                id:1,
                name:"sony",
                prize:93000,
                color:"blue",
                size:65
            },
            {
                id:2,
                name:"LG",
                prize:83000,
                color:"black",
                size:55
            },
            {
                id:3,
                name:"Index",
                prize:78000,
                color:"white",
                size:43
            },
            {
                id:4,
                name:"Redmi",
                prize:"71000",
                color:"red",
                size:32
            }

        ]


        television.forEach(function(element){
            for(let key in element){
                    if(key=="size"){
                        if(element[key]>=43){
                                document.write(` tv's above 43inches size are: ${element.name}`,"<br>");
                        }
                        else{
                            document.write("no stock");
                        }

                    }
                }

        })
