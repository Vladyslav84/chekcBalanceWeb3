const Web3 = require('web3');
require('dotenv').config();
const projectId: string = 'e1cd0e5b1e13440b964f5dba13323dd6';
const url: string = 'https://mainnet.infura.io/v3/' + projectId;
const web3 = new Web3(url);
const adress: string = '0xa145ac099e3d2e9781c9c848249e2e6b256b030d';
const fs = require('fs').promises;

 function showBalance(): void {

     setInterval(async () => {
        try {
            const res = await web3.eth.getBalance(adress, (err: any, bal: string) =>  { bal });
            const balance = await web3.utils.fromWei(res, 'ether');
            await fs.appendFile('balance.txt', `\n${balance}`, "utf8")
            
        } catch (error) {
            console.log(error);
        }
    }, 600);

 }

showBalance()
