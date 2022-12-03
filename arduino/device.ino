#include<Thermistor.h>

Thermistor temperatura(2);
int vermelho = 11;
int azul = 9;
int verde = 10;
int buzzer = 5;
int sensor = 2;

int temp_azul = 20;
int temp_verde = 25;
int temp_amarelo = 30;

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

  if (temp <= temp_azul) {
    apaga_amarelo();
    acende_azul();
    apaga_vermelho();
    apaga_verde();
    noTone(buzzer);
  } else if (temp < temp_verde) {
    apaga_amarelo();
    acende_verde();
    apaga_vermelho();
    apaga_azul();
    noTone(buzzer);
  } else if (temp < temp_amarelo) {
    apaga_azul();
    apaga_verde();
    apaga_vermelho();
    acende_amarelo();
    noTone(buzzer);
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
}
