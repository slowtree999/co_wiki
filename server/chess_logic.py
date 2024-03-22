import chess

class ChessGame:
    def __init__(self):
        self.board = chess.Board()

    def get_board(self):
        return self.board

    def move(self, move_uci):
        move = chess.Move.from_uci(move_uci)
        if move in self.board.legal_moves:
            self.board.push(move)
            return True
        return False
