let currentDate = new Date();

        function renderCalendar() {
            const monthYear = document.getElementById("monthYear");
            const calendarDays = document.getElementById("calendarDays");
            calendarDays.innerHTML = "";
            monthYear.textContent = currentDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
            const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
            const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            for (let i = 0; i < firstDay; i++) {
                calendarDays.innerHTML += "<div></div>";
            }
            
            for (let i = 1; i <= lastDate; i++) {
                calendarDays.innerHTML += `<div class='day'>${i}</div>`;
            }
        }
        function antimes() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        }
        function promes() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        }
        function painel() {
            document.getElementById("sidePanel").classList.toggle("active");
        }

        renderCalendar();


        