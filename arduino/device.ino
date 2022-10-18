int baselineTemp = 0;
int celsius = 0;

void setup()
{
  pinMode(A0, INPUT);
  Serial.begin(9600);//abre a porta serial, define a taxa de dados para 9600 bps 

  pinMode(2, OUTPUT);//led vermelho
  pinMode(3, OUTPUT);//led laranja
  pinMode(4, OUTPUT);//led amarelo
  pinMode(5, OUTPUT);//led verde
  pinMode(6, OUTPUT);//led azul
  pinMode(7, OUTPUT);//buzzer
  
}

void loop()
{
  // define a temperatura padrão
  baselineTemp = 15;
  // medir temperatura em Celsius 
  celsius = map(((analogRead(A0) - 20) * 3.04), 0, 1023, -40, 125);
  
  //liga led azul se temperatura abaixo de 15°
  if (celsius < baselineTemp) {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW); 
    digitalWrite(6, HIGH);
    digitalWrite(7, LOW);
  }    
  
   //liga led verde se temperatura entre 15° e 21°
  if (celsius >= baselineTemp && celsius < baselineTemp + 6) {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, HIGH); 
    digitalWrite(6, LOW);
    digitalWrite(7, LOW);
  }
  //liga led amarelo se temperatura entre 21° e 28°
  if (celsius >= baselineTemp + 6 && celsius < baselineTemp + 13) {
    digitalWrite(2, LOW);
    digitalWrite(3, LOW);
    digitalWrite(4, HIGH);
    digitalWrite(5, LOW); 
    digitalWrite(6, LOW);
    digitalWrite(7, LOW);
  }
  
 //   //liga led LARANJA se temperatura entre 35° e 39°
 // if (celsius >= baselineTemp + 11 && celsius < baselineTemp + 25) {
 //   digitalWrite(2, LOW);
 //   digitalWrite(3, HIGH);
 //   digitalWrite(4, LOW);
 //   digitalWrite(5, LOW); 
 //   digitalWrite(6, LOW);
//    tone(7, 500, 200);   // liga o LED

 // }
    //liga led vermelho e buzzer se temperatura acima de 28°
  if (celsius >= baselineTemp + 13) {
    digitalWrite(2, HIGH);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW); 
    digitalWrite(6, LOW);
    tone(7, 500, 1000);
    delay (1000);
  }
  
  Serial.println(celsius);//mostra a temperatura
  
  delay(1000); // Aguarde 1000 milissegundos (s)
}