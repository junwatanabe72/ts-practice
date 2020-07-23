import { ISquare, Histories } from "./entity";

// 勝敗判定
export function calculateWinner(squares: ISquare[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// プレイヤー判定
export const getStatus = (winner: ISquare, xIsNext: boolean) => {
  // テンプレート文字列を使う
  if (winner) {
    return `Winner: ${winner}`;
  } else {
    const nextPlayer = xIsNext ? "X" : "O";
    return `Next player: ${nextPlayer}`;
  }
};

// 現在の盤面を描画する関数
export const createNewSquares = (
  squares: ISquare[],
  xIsNext: boolean,
  i: number
) =>
  // mapで新しい配列を返すように変更
  squares.map((square, index) => {
    if (i === index) {
      return xIsNext ? "X" : "O";
    }

    return square;
  });