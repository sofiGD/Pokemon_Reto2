function getRandomNumber() {
    // Obtiene un número decimal aleatorio entre 0 (inclusive) y 1 (exclusive)
    const randomDecimal = Math.random();

    // Multiplica por 10000 para obtener un número entre 0 (inclusive) y 10000 (exclusive)
    const randomNumber = Math.floor(randomDecimal * 1000) + 1;

    return randomNumber;
  }

  export default getRandomNumber;
