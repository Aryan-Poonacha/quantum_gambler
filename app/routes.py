from app import app
from flask import render_template

from qiskit import *
from qiskit.circuit.random import random_circuit

@app.route('/')
@app.route('/index')
def index():
     return render_template('index.html')

@app.route('/game')
def game():
     NO_OF_CARDS = 12
     MEASURE_LIST = [2, 3, 7, 6]

     circ = random_circuit(NO_OF_CARDS, NO_OF_CARDS, measure = True)
     #circ.draw(output='mpl')
     shots = 1024
     job = execute(circ, backend=BasicAer.get_backend('qasm_simulator'), shots=shots)
     results = job.result().get_counts(circ)
     max_result = max(results, key=results.get)
     return render_template('game.html', data = max_result)