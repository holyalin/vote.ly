"use client";

export default function Opt() {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
      <script src="https://cdn.tailwindcss.com"></script>
      <div class="navbar bg-base-100">
        <a href="/" class="btn btn-ghost normal-case flex items-center">
          <img src="/logo.svg" alt="Logo" style={{ height: '20px', width: 'auto' }} />
        </a>
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
