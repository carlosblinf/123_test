//ejercicio 1:
const duplicador = function(n) {
    if(n == 4)
        return n;
    return 2*duplicador(n+1);
}
console.log("ejercicio 1, duplicador: " + duplicador(2));
//respuesta: 16

//ejercicio 2:
const recursive = function(x, y){
    if(x == 0)
        return y;
    return recursive(x - 1, x + y);
}
console.log("ejercicio 2, recursive: " + recursive(4, 3));
//respuesta: 13

//ejercicio 3:
const esPotencia =  function(n) {
    if(n === 0 || n === 1) return n;
    if(n % 3 != 0) return 0;

    return esPotencia(n/3);
}
console.log("ejercicio 3-test, potencia: con 3 " + esPotencia(3));
console.log("ejercicio 3-test, potencia: con 6 " + esPotencia(6));
console.log("ejercicio 3-test, potencia: con 9 " + esPotencia(9));
console.log("ejercicio 3-test, potencia: con 27 " + esPotencia(27));
console.log("ejercicio 3-test, potencia: con 5 " + esPotencia(5));
//respuesta: 2do, 1 cuando n es potencia, o 0 en caso contrario.

//ejercicio 4:
// Cuál es la complejidad de tiempo y espacio del siguiente código?
/* 
    a = 0, b = 0;
    for(i=0;i<N;i++){
        a = a + 5;
    }

    for(j=0;j<M;j++){
        b = b + 10;
    }
*/
//respuesta: 3ro  O(N+M) time, O(1) space
console.log("ejercicio 4, 3ro:  O(N+M) time, O(1) space");

//ejercicio 5:
/* Dado el siguiente esquema:
    employees(emp-id, first-name, last-name, hire-date, dept-id, salary)
    departaments(dept-id, dept-name, manager-id, location-id)

   Quieres mostrar los apellidos y fechas de contratacion de los últimos empleados que han sido contratados por el departamento
   en la ubicación UD 1700. Corres la siguiente query:
    SQL > SELECT name, hire-date FROM employees
        WHERE (dept-id, hire-date) IN (SELECT dept-id, MAX(hire-date) FROM employees
        USING (dept-id) WHERE location-id = 1700 GROUP BY dept-id);

        SELECT last_name, hire_date FROM employees
        WHERE (dept_id, hire_date) IN (SELECT dept_id, MAX(hire_date) FROM employees
        JOIN departaments USING (dept_id) WHERE location_id = 1700 GROUP BY dept_id);
    
    Cuál es el resultado?
*/
//se ejecuta de manera correcta
console.log("ejercicio 5, SQL: se ejecuta de manera correcta");

//ejercicio 6:
/* Crea una funcion que haga lo siguiente:
    Imprime todas las combinaciones posibles de paréntisis balanceados, la función recibirá un número entero de la cantidad
    de paréntisis balanceados requeridos.
    Por ejemplo:
    parentisisBalanceados(1) -> {}
    parentisisBalanceados(2) -> {}{}, {{}}
    parentisisBalanceados(2) -> {}{}{}, {{}{}}, {}{{}}, {{}}{}, {{{}}},
    parentisisBalanceados(2) -> {}{}{}{}, {{}{}{}}, {}{}{{}}, {}{{}}{},
                                {{}}{}{}, {}{{}{}}, {{}{}}{}, {{}}{{}},
                                {{}{{}}}, {{{}}{}}, {{{{}}}}
*/


function _parentisisBalanceados( str , pos , n , open , close)
{
    if (close == n)
    {
        console.log(...str);
    }
    else
    {
        if (open > close)
        {
            str[pos] = '}';
            _parentisisBalanceados(str, pos + 1, n, open, close + 1);
        }
        if (open < n)
        {
            str[pos] = '{';
           _parentisisBalanceados(str, pos + 1, n, open + 1, close);
        }
    }
}
function parentisisBalanceados(n) {
    let str = [];
    if (n > 0)
        _parentisisBalanceados(str, 0, n, 0, 0);
}
console.log("ejercicio 6, parentis balanceados: ");
parentisisBalanceados(3);

//ejercicio 7:
/* Crea una funcion que haga lo siguiente:
    Dada una cadena, ordene todos los posibles substrings en orden alfabético e imprima el caracter dado después de concatenar
    los substrings.
    Ejemplo:
        imprimeNSubstring("dbac", 3) -> El caracter es C
    Explicación:
    Las substings son -> a, ac, b, ba, bac, c, d, db, dba, dbac
    Después de concatenar es -> aacbbabaccddbdbadbac Por lo tanto quien está en la posición 3 es C.
*/
function imprimeNSubstring(str, position){
    let res = [];
    
    //combinaciones
    for (let i = 0; i < str.length; i++) 
        for (let j = str.length; j > 0 ; j--) 
            res.push(str.substring(i,j));
    
    let sorted_clean_string = res.filter((item, index, array) => {
        return array.indexOf(item) === index && item != '';
      }).sort().join('');

    console.log(sorted_clean_string);
    return sorted_clean_string.charAt(position-1);
}
// console.log(imprimeNSubstring('dbac',3));
console.log("ejercicio 7, substrings: " + imprimeNSubstring('dbac',1));


//ejercicio 8:
/* Crea una funcion que haga lo siguiente:
    Dado un número, necesitamos encontrar el súper dígito de ese número.
    Definimos súper dígito un número como:
    - Si tiene solo un dígito entonces el mismo es el súper dígito.
    - Si tiene más un dígito entonces el súper dígito es la suma de todos los dígitos hasta que solo quede 1 dígito, ejemplo:
        super_digit(9875) = super_digit(9+8+7+5)
                          = super_digit(29)
                          = super_digit(2+9)
                          = super_digit(11)
                          = super_digit(1+1)
                          = super_digit(2)
                          = 2
    Para este problema recibes 2 números, y debes calcular el súper dígito de el número resultante en la concatenación de n veces,
    por ejemplo:
        148 3
        Entonces el número del que queremos saber el súper dígito es 148148148
        Resultado
        3
        Explicación:
        super_digit(P) = super_digit(148148148)
                          = super_digit(1+4+8+1+4+8+1+4+8)
                          = super_digit(39)
                          = super_digit(3+9)
                          = super_digit(12)
                          = super_digit(1+2)
                          = super_digit(3)
                          = 3
*/
function super_digit(number){
    let sum_digits = number.toString().split('').reduce((res,d) => res += parseInt(d), 0);
    if(sum_digits > 9)
        return super_digit(sum_digits);
    return sum_digits;
}
function calc_super_digit(number, times){
    let res = '';
    while (times > 0){
        res = res.concat(number);
        times--;
    }
    return super_digit(res);
}
console.log("ejercicio 8, súper dígito: " + calc_super_digit(148,3));
