// Password confirmation validation on register.html
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");

if (passwordInput && confirmInput) {
    const validatePasswordMatch = () => {
        confirmInput.setCustomValidity(
            confirmInput.value && confirmInput.value !== passwordInput.value
                ? "Passwords do not match."
                : ""
        );
    };

    passwordInput.addEventListener("input", validatePasswordMatch);
    confirmInput.addEventListener("input", validatePasswordMatch);
}

// Interactive task creation on tasks.html
const taskForm = document.getElementById("task-form");
const taskTableBody = document.getElementById("task-table-body");

if (taskForm && taskTableBody) {
    const priorityBadgeClass = {
        High: "badge-high",
        Medium: "badge-mid",
        Low: "badge-low",
    };

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(taskForm);
        const name = (formData.get("task_name") || "").toString().trim();
        const category = (formData.get("category") || "Work").toString();
        const priority = (formData.get("priority") || "Medium").toString();
        const dueDate = (formData.get("due_date") || "-").toString() || "-";
        const description = (formData.get("description") || "").toString().trim() || "-";

        if (!name) return;

        const row = document.createElement("tr");

        const cells = [name, category, priority, dueDate, description];
        cells.forEach((value, index) => {
            const td = document.createElement("td");
            if (index === 2) {
                const badge = document.createElement("span");
                badge.className = `badge ${priorityBadgeClass[value] || "badge-mid"}`;
                badge.textContent = value;
                td.appendChild(badge);
            } else {
                td.textContent = value;
            }
            row.appendChild(td);
        });

        taskTableBody.appendChild(row);
        taskForm.reset();
    });
}
