import Constants from "../constants/constants.js"

export default function templateEmailConfirm(userName, userPass){
    return (
        `
        <html>
            <head>
                <style>
                @import url(${Constants.FontConfirmEmail});
                *{
                    margin: 0;
                    padding: 0;
                }
                body {
                    margin: 0;
                    padding: 0;
                }
        
                table {
                    border-spacing: 0;
                }
        
               .wrapper{
                table-layout: fixed;
                width: 100%;
               }
                
                .white-box {
                    background-color: #F6F6E9;
                    width: 718px;
                    height: 24px;
                    border-spacing: 0;
                    padding: 0;
                    margin: 0;
                    color: #692900;
                    white-space: nowrap;
                    overflow: hidden;
                }
        
                .text-image-column {
                    width: 718px;
                    height: 249px;
                    overflow: hidden;
                }
                .text-image-column .column{
                    display: inline;
                    vertical-align: top;
                }
        
                .green-box{
                    width: 718px;
                    height: 626px;
                    background-color: #1D7151;
                    color: #FFFFFF;
                }
                .ticket-box .column-ticket{
                    display: inline;
                    vertical-align: top;
                }
                .pass-box .column-pass{
                    display: inline;
                    vertical-align: top;
                }
        
                .yellow-box{
                    white-space: nowrap;
                }
                .programation-column .column-prog{
                    display: inline;
                    vertical-align: top;
                }
        
                .botao-site .column-btn{
                    display: inline;
                    white-space: nowrap;
                    vertical-align: middle;
                }
                .title-green-box{
                    font-family: 'Cardo', serif;
                    font-weight: 400;
                    word-spacing: 2px;
                }
                .text-green-box{
                    font-family: 'Lato', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    word-spacing: 2px;
                }
                img{
                    display: block;
                }
                </style>
            </head>
        <body>
                <center class="wrapper">
                <table> <tr> <td> 
                    <table class="white-box" style="overflow: hidden; width: 718px">
                        <tr>
                            <td class="text-image-column">

                                <table class="column">
                                    <tr>
                                        <td colspan="2" style=" padding-top: 20px; padding-bottom:0">
                                            <h1 class="title" style="font-size: 50px; font-family: 'Cardo', serif; font-weight: 400; margin-left: 36px">Congresso <br> Fedrann</h1>
                                            <p class="text-white-box" style="margin-left: 36px;padding-top: 30px; font-size: 30px; font-family: 'Lato', sans-serif">Olá ${userName}</p>
                                        </td>
                                    </tr>
                                </table>

                                <table class="column" style="font-size: 0;">
                                    <tr>
                                        <td style="padding: 0;">
                                            <img class="img-white-box" style="width: 375px; height: 100%; margin-left: 92px" src="${Constants.LecturePhoto}" alt="">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <table class="green-box">
                        <tr>
                            <td class="pass-box" style="padding-top: 40px;">
                                <table class="column-pass">
                                    <tr>
                                        <td style="padding-bottom:90px ;margin-right: 40px;">
                                            <img style="width: 250px;margin-left: 40px;" src="${Constants.LockPhoto}" alt="">
                                        </td>
                                    </tr>
                                </table>

                                <table class="column-pass">
                                    <tr>
                                        <td style="padding-top: 50px;color:#FFFFFF">
                                            <p style="font-size: 38px; padding-bottom: 20px; margin-left: 40px; color:#FFFFFF" class="title-green-box"> Acesso ao site</p>
                                            <p style="padding-bottom: 20px; margin-left: 40px;color:#FFFFFF" class="text-green-box">Para logar no site utilize o email previamente <br> cadastrado e insira a senha abaixo.</p>
                                            
                                            <table class="text-green-box" style="margin-left: 40px;;background-color: #ED4322; width: 315px; margin-bottom: 20px; padding-bottom:8px;  padding-top:8px; padding-left:14px">Senha: ${userPass} </table>
                                                <table style="background-color: #fffb7a; width: 144px; height: 28px; padding-top: 10px;margin-left: 40px; padding-bottom: 2px; color:#692900;">
                                                    <tr>
                                                        <td class="botao-site" style=" vertical-align:top">
                                                            <center>
                                                            <a href="${process.env.LINKACESS}" style="text-decoration: none;color: #000000" target="_blank">

                                                                <table class="column-btn">
                                                                    <tr>
                                                                        <td>
                                                                            <p class="text-green-box style="margin-bottom: 2%">Acesse o site </p> 
                                                                        </td>
                                                                    </tr>
                                                                </table>
                        
                                                                <table class="column-btn">
                                                                    <tr>
                                                                        <td>
                                                                            <img style="vertical-align: middle; margin-left:5px; margin-bottom: 3%" src="${Constants.ArrowEmail}" alt="">
                        
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                </a>
                                                            </center>
                                                        </td>
                                                    </tr>
                                                </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td class="ticket-box" style="margin-bottom: 20px; margin-left: 40px">
                                <table class="column-ticket">
                                    <tr>
                                        <td style="margin-right: 40px;">
                                            <img style="margin-left: 40px; margin-bottom: 30px" src="${Constants.TicketPhoto}" alt="">
                                        </td>
                                    </tr>
                                </table>

                                <table class="column-ticket">
                                    <tr>
                                        <td style="padding-bottom: 40px;">
                                            <p style="font-size: 38px; padding-bottom: 20px; margin-left:40px" class="title-green-box">Ingressos</p>
                                            <p style="padding-bottom: 0px; margin-left:40px" class="text-green-box">Para ter acesso ao evento, é obrigatório <br> apresentar o ingresso. Faça download do <br> mesmo  nos anexos  deste email.</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <table class="yellow-box" style="background-color: #fffb7a; width: 718px">
                        <tr>
                            <td class="programation-column">

                                <table class="column-prog">
                                    <tr>
                                        <td style="padding-left: 0px;">
                                            <h1 class="title-green-box" style="font-size: 50px;margin-left: 40px;margin-bottom: 40px; margin-top: 20px; color:#1D7151">Programação</h1>
                                            <p class="text-green-box" style="margin-left: 40px;margin-bottom: 40px; color: #B62D07">Acesse a programação do evento</p>
                                                <table style="background-color: #1D7151; width: 144px; height: 28px; padding-top: 10px;margin-left: 40px; padding-bottom: 2px; color:#FFFFFF;">
                                                <tr>
                                                    <td class="botao-site" style="vertical-align: top;" >
                                                        <center>
                                                         <a href="${process.env.LINKPROGRAMATION}" style="text-decoration: none;color:#FFFFFF" target="_blank">
                                                            <table class="column-btn">
                                                                <tr>
                                                                    <td>
                                                                        <p class="text-green-box" style="margin-bottom: 1%">Programação</p> 
                                                                    </td>
                                                                </tr>
                                                            </table>
                    
                                                            <table class="column-btn">
                                                                <tr>
                                                                    <td>
                                                                        <img style="vertical-align: middle; margin-left:5px; margin-bottom: 3%" src="${Constants.ArrowEmail}"  alt="Arrow">
                    
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                              </a>
                                                        </center>
                                                    </td>
                                                </tr>
                                            </table>
                                      
                                        </td>
                                    </tr>
                                </table>

                                <table class="column-prog" style="font-size: 0;">
                                    <tr>
                                        <td style="padding: 0;">
                                            <img style="width: 300px; height: 100%;margin-left: 112px;" src="${Constants.ClockPhoto}" alt="">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    </td> </tr> </table>
                </center>
            </body>
        </html>
        `
    )
}