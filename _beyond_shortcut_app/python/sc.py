
from shortcuts import Shortcut, actions, FMT_SHORTCUT

sc = Shortcut()

sc.actions = [
    actions.TextAction(data={'text': 'Hello, world!'}),
    actions.Base64EncodeAction(),
    actions.SetVariableAction(data={'name': 'var'}),
    actions.ShowResultAction(data={'text': 'Encoded variable: {{var}}'})
]

file_path = 's.shortcut'

with open(file_path, 'wb') as f:
    sc.dump(f, file_format=FMT_SHORTCUT)