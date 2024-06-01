"use client";

export default function Opt() {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
      <script src="https://cdn.tailwindcss.com"></script>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">VOTING</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Login</a>
        </div>
      </div>
      <div class="d-flex justify-center text-center mt-5 mb-5">
        <h1 class="font-bold text-5xl">Menambahkan Polling</h1>
      </div>

      <div class="flex justify-center">
        <button class="btn" onClick={() => document.getElementById("my_modal_2").showModal()}>
          Tambah
        </button>
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Masukkan pilihan</h3>

            <div class="mb-2 mt-5 flex justify-center">
              <h1 class="font-bold text-xl">Kategori</h1>
            </div>

            <div class="form-control flex justify-center">
              <div class="flex justify-center">
                <select id="category" class="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Pilih Kategori
                  </option>
                </select>
              </div>
            </div>

            <div class="mb-2 mt-5 flex justify-center">
              <h1 class="font-bold text-xl">Nama</h1>
            </div>
            <div class="flex justify-center">
              <label class="input input-bordered flex w-96 items-center gap-1 justify-center">
                <input type="text" class="grow" placeholder="Isi nama..." />
              </label>
            </div>

            <div class="flex justify-center mt-2 mb-2">
              <h1 class="font-bold text-xl">Gambar</h1>
            </div>
            <div class="flex justify-center">
              <label class="input input-bordered flex w-96 items-center gap-2">
                <input type="file" class="grow" accept="image/*" placeholder="Upload Photo" />
              </label>
            </div>

            <br />
            <div class="flex justify-center">
              <button class="btn btn-primary">Submit</button>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
