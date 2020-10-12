// Imports
import { Instruccion } from "./Instruccion";
import * as G from './Globales'
// Clase Principal
export class Print extends Instruccion{

    // Declaraciones
	public AST = null;
	
	// Constructor
    constructor(Linea: number, Columna: number, private Value: Instruccion) {
        
		// Super
		super(Linea, Columna)
		
    }

	// Metodo Traducir
    public Traducir() {
		
		// Declaraciones
		let Value = this.Value.Traducir();
		let Traduccion = G.Identacion()+"console.log(" + Value + ");";
		
		return Traduccion;
    }
}

