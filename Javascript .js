const btnPlayer = document.getElementById('btnPlayer');
        const iconPlayer = btnPlayer.querySelector('i');
        let isPlaying = false;

        btnPlayer.addEventListener('click', () => {
            isPlaying = !isPlaying; // Balik status true/false

            if (isPlaying) {
                // Ganti ikon Play ke Pause
                iconPlayer.classList.replace('fa-play', 'fa-pause');
                iconPlayer.classList.remove('ml-1'); // Hapus margin kiri agar senter
                
                // Ganti warna background
                btnPlayer.classList.replace('bg-indigo-600', 'bg-pink-600');
            } else {
                // Ganti ikon Pause ke Play
                iconPlayer.classList.replace('fa-pause', 'fa-play');
                iconPlayer.classList.add('ml-1'); // Tambah margin kiri visual
                
                // Ganti warna background
                btnPlayer.classList.replace('bg-pink-600', 'bg-indigo-600');
            }
        });
