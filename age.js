 function calculateAge() {
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value);
      const year = parseInt(document.getElementById("year").value);
      const result = document.getElementById("result");
      const error = document.getElementById("error");

      result.innerHTML = "";
      error.innerHTML = "";

      if (!day || !month || !year) {
        error.innerHTML = "Please fill in all fields.";
        return;
      }

      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      if (birthDate > today) {
        error.innerHTML = "Date of birth cannot be in the future.";
        return;
      }

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      result.innerHTML = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
    }