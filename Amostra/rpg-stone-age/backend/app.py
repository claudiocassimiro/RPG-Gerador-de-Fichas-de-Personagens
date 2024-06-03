from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Carregar dados do Excel na inicialização
data = pd.read_excel('../data/RPG Stone Age - Geral.xlsx', sheet_name=None)

@app.route('/data/<sheet_name>', methods=['GET'])
def get_sheet_data(sheet_name):
    if sheet_name in data:
        return jsonify(data[sheet_name].to_dict(orient='records'))
    return jsonify({'error': 'Sheet not found'}), 404

@app.route('/inventory', methods=['GET'])
def get_inventory():
    # Implementar lógica para retornar o inventário do jogador
    return jsonify({'inventory': []})

if __name__ == '__main__':
    app.run(debug=True)
