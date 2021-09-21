import { roman2modern } from "./modules/Roman_to_Modern.js"
import { modern2roman } from "./modules/Modern_to_Roman.js"

const inputR = document.getElementById('inputR')
const inputM = document.getElementById('inputM')

inputR.addEventListener ('input', roman2modern )
inputM.addEventListener ('input', modern2roman )