#include<Thermistor.h>

Thermistor temperatura(2);
int vermelho = 11;
int azul = 9;
int verde = 10;
int buzzer = 5;
int sensor = 2;

void setup()
{
  pinMode(vermelho, OUTPUT);
  pinMode(azul, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(buzzer, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  int temp = temperaturaAtual();
  
  if (temp <= 20) {
    apaga_amarelo();
    acende_azul();
    apaga_vermelho();
    apaga_verde();
  } else if (temp < 25) {
    apaga_amarelo();
    acende_verde();
    apaga_vermelho();
    apaga_azul();
  } else if (temp < 30) {
    apaga_azul();
    apaga_verde();
    apaga_vermelho();
    acende_amarelo();
  } else {
    toca_buzzer();
    apaga_amarelo();
    acende_vermelho();
    apaga_verde();
    apaga_azul();
  }
}

int temperaturaAtual() {
  int temp = temperatura.getTemp();
  Serial.println(temp);
  
  return temp;
}

void acende_amarelo() {
  digitalWrite(vermelho, HIGH);
  digitalWrite(verde, HIGH);
}

void apaga_amarelo() {
  digitalWrite(verde, LOW);
  digitalWrite(vermelho, LOW);
}

void acende_vermelho() {
  digitalWrite(vermelho, HIGH);
}

void apaga_vermelho() {
  digitalWrite(vermelho, LOW);
}

void acende_azul() {
  digitalWrite(azul, HIGH);
}

void apaga_azul() {
  digitalWrite(azul, LOW);
}

void acende_verde() {
  digitalWrite(verde, HIGH);
}

void apaga_verde() {
  digitalWrite(verde, LOW);
}

void toca_buzzer() {
  tone(buzzer, 1000);
  delay(500); 
  noTone(buzzer);
  delay(500);
}
