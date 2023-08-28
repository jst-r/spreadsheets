import { For } from "solid-js";
import { A } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="p-1 gap-1 bg-gray-700 grid grid-cols-12">
      <For each={[...Array(12)]}>
        {(item, i) => (
          <For each={[...Array(12)]}>
            {(_, j) => (
              <input
                class="bg-gray-100 p-2 hover:bg-slate-200 transition-colors"
                value={`${i()} ${j()}`}
              />
            )}
          </For>
        )}
      </For>
    </main>
  );
}
