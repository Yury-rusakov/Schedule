import React, { useState, useEffect } from "react";

export default function Fifteen() {
  const shuffleSolvable = () => {
    const arr = Array.from({ length: 16 }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (!isSolvable(arr)) {
      const i1 = arr.findIndex(x => x !== 0);
      const i2 = arr.findIndex((x, idx) => x !== 0 && idx !== i1);
      [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    }
    return arr;
  };

  const isSolvable = (perm) => {
    const a = perm.filter(x => x !== 0);
    let inv = 0;
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) inv++;
      }
    }
    const zeroIndex = perm.indexOf(0);
    const rowFromTop = Math.floor(zeroIndex / 4) + 1;
    const rowFromBottom = 4 - (rowFromTop - 1);
    if (rowFromBottom % 2 === 0) return inv % 2 === 1;
    return inv % 2 === 0;
  };

  const [tiles, setTiles] = useState(() => shuffleSolvable());
  const [won, setWon] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    checkWin();
  }, [tiles]);

  const idxToRC = (idx) => ({ r: Math.floor(idx / 4), c: idx % 4 });

  const canMove = (idx) => {
    const zeroIdx = tiles.indexOf(0);
    const a = idxToRC(idx);
    const b = idxToRC(zeroIdx);
    const dr = Math.abs(a.r - b.r);
    const dc = Math.abs(a.c - b.c);
    return (dr + dc) === 1;
  };

  const move = (idx) => {
    if (won) return;
    if (!canMove(idx)) return;
    const zeroIdx = tiles.indexOf(0);
    const newTiles = tiles.slice();
    [newTiles[zeroIdx], newTiles[idx]] = [newTiles[idx], newTiles[zeroIdx]];
    setTiles(newTiles);
    setMoves(m => m + 1);
  };

  const checkWin = () => {
    for (let i = 0; i < 15; i++) {
      if (tiles[i] !== i + 1) { setWon(false); return; }
    }
    if (tiles[15] !== 0) { setWon(false); return; }
    setWon(true);
  };

  const restart = () => {
    setTiles(shuffleSolvable());
    setWon(false);
    setMoves(0);
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 72px)",
    gridGap: "8px",
    marginBottom: 12
  };
  const tileStyle = (t, idx) => ({
    width: 72,
    height: 72,
    fontSize: 20,
    cursor: t === 0 ? "default" : (canMove(idx) ? "pointer" : "default"),
    background: t === 0 ? "#f0f0f0" : "#fff",
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    transition: "background 150ms"
  });

  return (
    <div>
      <div style={gridStyle} role="group" aria-label="Пятнашки 4×4">
        {tiles.map((t, idx) => (
          <button
            key={idx}
            onClick={() => move(idx)}
            disabled={t === 0}
            style={tileStyle(t, idx)}
          >
            {t === 0 ? "" : t}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={restart}>Новая</button>
        <div>Ходы: {moves}</div>
        <div style={{ color: "green", fontWeight: "bold" }}>{won ? "Победа!" : ""}</div>
      </div>
    </div>
  );
}