import { For, Index, createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { A } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  const [cells, setCells] = createStore<number[][]>(
    Array(12)
      .fill(null)
      .map(() => Array(12).fill(0))
  );

  createEffect(() =>
    console.log(
      cells.reduce((prev, row) => prev + row.reduce((s, n) => s + n), 0)
    )
  );

  return (
    <>
      <main class="p-1 gap-1 bg-gray-700 grid grid-cols-12">
        <Index each={cells}>
          {(row, i) => (
            <Index each={row()}>
              {(val, j) => (
                <input
                  type="number"
                  class="bg-gray-100 p-2 hover:bg-slate-200 transition-colors"
                  value={val()}
                  onChange={(n) =>
                    setCells(i, j, n.currentTarget.valueAsNumber)
                  }
                />
              )}
            </Index>
          )}
        </Index>
      </main>
    </>
  );
}
