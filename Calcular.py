import statistics as st
import numpy as np
class Calcular():
    def __init__(self, vet):
        self.vet = vet


    def mediana(self):
        return st.median(self.vet)

    def media(self):
        return st.mean(self.vet)

    def moda(self):
        return st.mode(self.vet)

    def desvioPadrao(self):
        return st.stdev(self.vet)

    def variancia(self):
        return st.variance(self.vet)

    def intervalo(self):
        max = np.max(self.vet)
        min = np.min(self.vet)
        return max-min

    def adicionar(self, value):
        self.vet.append(value)

    def valores(self):
        return self.vet