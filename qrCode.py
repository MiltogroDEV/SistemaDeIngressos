import qrcode
import sqlite3
from random import randint

banco = sqlite3.connect('banco.db') # Cria/conecta com o banco local
cursor = banco.cursor()

# cursor.execute(f'CREATE TABLE ingressos(numero int)') # Cria tabela no banco

for i in range(1,31):
    num = randint(111111,999999)
    img = qrcode.make(num)
    img.save(f'qrCodes/{num}.png')
    cursor.execute(f'INSERT INTO ingressos VALUES ({num})')

banco.commit()