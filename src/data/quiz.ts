// [pregunta, opciones, índice correcto, explicación]
export const preguntas: [string,string[],number,string][] = [
['¿En qué ciudad nació George Boole?',['Londres','Lincoln','Cork','Cambridge'],1,'Nació en Lincoln, Inglaterra, en 1815.'],
['En el álgebra de Boole, ¿cuánto vale 1 · 0 (1 AND 0)?',['1','0','2','Infinito'],1,'AND es como multiplicar: si un valor es 0, el resultado es 0.'],
['¿Qué libro publicó Boole en 1854?',['Principia Mathematica','Las leyes del pensamiento','Elementos','Grundlagen'],1,'An Investigation of the Laws of Thought (1854).'],
['¿Quién aplicó el álgebra de Boole a los circuitos eléctricos en 1937?',['Alan Turing','Claude Shannon','Ada Lovelace','John von Neumann'],1,'Claude Shannon, en su tesis de maestría del MIT.'],
['¿Cuál es la ley de idempotencia de Boole?',['x + 1 = x','x² = x','x · 0 = x','x − x = 1'],1,'x² = x: "llueve y llueve" equivale a "llueve".'],
['¿Dónde nació Georg Cantor?',['Berlín','Viena','San Petersburgo','Halle'],2,'Nació en San Petersburgo, Rusia, en 1845.'],
['¿Con qué técnica probó Cantor que los reales no se pueden listar?',['Inducción','Argumento diagonal','Regla de tres','Teorema de Pitágoras'],1,'El argumento diagonal (1891) construye un número que no está en la lista.'],
['¿Cuántos subconjuntos tiene el conjunto {a, b, c}?',['3','6','8','9'],2,'2³ = 8, incluyendo el vacío y el conjunto completo.'],
['¿Cómo se llama el cardinal de los números naturales?',['ℵ₀ (alef cero)','π','e','Ω'],0,'ℵ₀ es el infinito numerable.'],
['¿Qué matemático se opuso con fuerza a las ideas de Cantor?',['Leopold Kronecker','David Hilbert','Richard Dedekind','Karl Weierstrass'],0,'Kronecker rechazaba el infinito actual; Hilbert, en cambio, lo defendió.']];
