// const canvas = document.getElementById('matrix');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const matrix = 'Welcome everyone';
// matrixArr = matrix.split('');

// const font_size = 20;
// const columns = canvas.width / font_size;

// let drops = [];
// for (let x = 0; x < columns; x++) {
//     drops[x] = 1;
// }

// function draw() {
//     ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = 'blue';
//     ctx.font = font_size + 'px arial';

//     for (let i = 0; i < drops.length; i++) {
//         const text = matrixArr[Math.floor(Math.random() * matrixArr.length)];
//         ctx.fillText(text, i * font_size, drops[i] * font_size);

//         if (drops[i] * font_size > canvas.height && Math.random() > 0.965) {
//             drops[i] = 0;
//         }

//         drops[i]++;
//     }
// }

// setInterval(draw, 50);


const canvas = document.getElementById('matrix');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = 'Welcome everyone';
        matrixArr = matrix.split('');

        const font_size = 20;
        const columns = Math.ceil(canvas.width / font_size) + 1;

        let drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'blue';
            ctx.font = font_size + 'px arial';

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArr[Math.floor(Math.random() * matrixArr.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.965) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }
        function update() {
            draw();
            requestAnimationFrame(update);
        }
        
        update();
        setInterval(draw, 14400);