import puppeteer from "puppeteer";
import userModel from "../models/userModel.js";
import qrCodeController from "./qrCodeController.js";
import Constants from "../constants/constants.js";

async function ticketPdf(userId) {
    const id = userId;
    const dates = [27, 28, 29];
    const colors = [`#F37C16`, `#8DCE25`, `#31C5F5`];
    const hours = ['17:30', '08:00', '08:00'];

    try {
        const user = await userModel.findById(id);

        if (id == null || id == undefined) {
            return console.log('Usuário não encontrado');
        }
        if (!user) {
            return console.log('Usuário não encontrado');
        }

        function upperInitials(text) {
            var words = text.split(" ");
            var upperList = [];

            for (var i = 0; i < words.length; i++) {
                var word = words[i];
                var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
                upperList.push(capitalizedWord);
            }

            return upperList.join(" ");
        }
        const userName = upperInitials(user.userName);
        const userCategory = upperInitials(user.userCategory);


        async function createPdf(date, color, hour, qrCodeImg, browser) {
            const page = await browser.newPage();

            const html = `
                    <html>
                    <head>
                    
                    <style>
                    @import url(${Constants.FontPdf});

                        * {
                        margin: 0px;
                        padding: 0px;
                    }
                    
                    #body{
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .corpoPdf{
                        position: absolute;
                        width: 485px;
                        height: 771px;
                        background-color: #FEEAE9;
                        border-radius: 40px;
                        overflow: hidden;
                        
                    }
                    
                    .contentParticipant{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        margin-top: 24px;
                        margin-left: 30px;
                        margin-right: 30px;
                    }
                    
                    .logoFedrann{
                        position: relative;
                        width: 207.63px;
                        height: 50.61px;
                    }
                    
                    .bottomQR{
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        background-color: ${color};
                        width: 485px;
                        height: 384px;
                        align-items: center;
                        top: 387px;
                    }
                    
                    .sociedadeCivil{
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        margin-top: 23.4px;
                    }
                    
                    .dataFromVar{
                        position: relative;
                        font-family: 'SST Typewriter', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 15px;
                        line-height: 20px;
                        color: ${color};
                    }
                    
                    .circle{
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        background-color: ${color};
                        border-radius: 40px;
                        left: 410px;
                    }
                    
                    .underline{
                        width: 431px;
                        height: 1px;
                        background-color:rgba(0, 0, 0, 0.15) ;
                    }
                    
                    .nameAndAddress{
                        margin-top: 35px;
                    }
                    
                    .underLineText{
                        position: relative;
                        font-family: 'SST Typewriter', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 15px;
                        line-height: 20px;
                        color: rgba(0, 0, 0, 0.15);
                    }
                    
                    .dateAndHour{
                        display: flex;
                        flex-direction: row;
                        
                    }
                    
                    .blocoDate{
                        margin-top: 35px;
                    }
                    
                    .blocoDate:last-child{
                        margin-left: 20px;
                    }
                    
                    .underlineDate{
                        width: 205px;
                        height: 1px;
                        background-color:rgba(0, 0, 0, 0.15) ;  
                    } 

                    .bottomQR{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .qrCode{
                        width: 250px;
                    }
                    
                    </style>
                    </head>
                
                    <body>
                    <div class="corpoPdf">
                        <div class="contentParticipant">
                        <img src="${Constants.LogoFedrannPdf}" alt="Foto" class="logoFedrann">
                        <div class="sociedadeCivil">
                            <p class="dataFromVar">${userCategory}</p>
                            <div class="circle"></div>
                            </div>
                
                            <div class="nameAndAddress">
                            <p class="dataFromVar">Centro Universitário UniFanor /// Campus Dunas</p>
                            <div class="underline"></div>
                            <p class="underLineText">ENDEREÇO</p>
                            </div>
                            <div class="nameAndAddress">
                            <p class="dataFromVar">${userName}</p>
                            <div class="underline"></div>
                            <p class="underLineText">PARTICIPANTE</p>
                            </div>
                            
                            <div class="dateAndHour">
                            <div class="blocoDate">
                                <p class="dataFromVar">${hour} /// GMT - 3 </p>
                                <div class="underlineDate"></div>
                                <p class="underLineText">HORARIO DE INICIO</p>
                            </div>
                            <div class="blocoDate">
                                <p class="dataFromVar">${date} de novembro </p>
                                <div class="underlineDate"></div>
                                <p class="underLineText">HORARIO DE INICIO</p>
                            </div>
                            </div>
                        </div>
                        
                        <div class="bottomQR">
                            <img src="${qrCodeImg}" alt="" class="qrCode">
                        </div>
                    </div>
                    </body>
                    </html>
                    `
            await page.setContent(html, { waitUntil: 'networkidle2' });
            const creatingPdf = await page.pdf({
                margin: { top: '25px', right: '50px', bottom: '25px', left: '50px' },
                printBackground: true,
                format: 'A5',
            });
            return creatingPdf;

        };
        const pdfs = [];
        const browser = await puppeteer.launch({ headless: false });
        const qrCodeImg = `data:image/jpeg;base64,${await qrCodeController(id)}`
        
        for (let i = 0; i < dates.length; i++) {
            pdfs.push(createPdf(dates[i], colors[i], hours[i], qrCodeImg, browser))
        }

        const createdPdfs = await Promise.all(pdfs);
        await browser.close();
        return createdPdfs;

    } catch (error) {
        return console.log("Error:" + error);
    }
}

export default ticketPdf;