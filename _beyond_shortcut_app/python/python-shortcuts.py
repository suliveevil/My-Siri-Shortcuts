from shortcuts import Shortcut, actions


sc = Shortcut()

sc.actions = [
    actions.AskAction(data={'question': 'What is your name?'}),
    actions.SetVariableAction(data={'name': 'name'}),
    actions.ShowResultAction(data={'text': 'Hello, {{name}}!'})
]