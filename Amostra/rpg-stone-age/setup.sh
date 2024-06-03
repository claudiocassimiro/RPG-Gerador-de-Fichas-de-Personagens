#!/bin/bash

# Criar e ativar um ambiente virtual
python3 -m venv venv
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt

echo "Setup concluído com sucesso!"

