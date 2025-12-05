
        // Track the number of registered teams
        let registeredTeamsCount = 0;
        const MAX_TEAMS = 8;
        const teamNames = [];

        function registerTeam() {
            const inputField = document.getElementById('teamNameInput');
            const messageElement = document.getElementById('registrationMessage');
            const teamName = inputField.value.trim();

            // 1. Validation
            if (registeredTeamsCount >= MAX_TEAMS) {
                messageElement.textContent = 'Registration closed. The league is full!';
                document.getElementById('registerButton').disabled = true;
                return;
            }

            if (teamName === '') {
                messageElement.textContent = 'Please enter a valid team name.';
                return;
            }
            
            if (teamNames.includes(teamName)) {
                messageElement.textContent = `The team name "${teamName}" is already registered.`;
                return;
            }

            // 2. Registration Logic
            registeredTeamsCount++;
            teamNames.push(teamName);
            
            // 3. Update Table Row
            const rowId = `team-row-${registeredTeamsCount}`;
            const teamRow = document.getElementById(rowId);
            if (teamRow) {
                // Get the second <td> which holds the team name
                const teamNameCell = teamRow.querySelector('td:nth-child(2)');
                
                // Update the text and styling
                teamNameCell.textContent = teamName;
                teamNameCell.classList.remove('text-gray-600', 'dark:text-gray-400');
                teamNameCell.classList.add('font-extrabold', 'text-red-600', 'dark:text-red-400');
                teamRow.classList.add('font-bold', 'text-red-600', 'dark:text-red-400'); // Highlight the newly registered team row
            }

            // 4. Update Roster List (Right column)
            const rosterList = document.getElementById('rosterList');
            // Get the corresponding NIL paragraph element (index is count - 1)
            const rosterItem = rosterList.children[registeredTeamsCount - 1];
            if (rosterItem) {
                rosterItem.textContent = `${registeredTeamsCount}. ${teamName}`;
                rosterItem.classList.remove('text-gray-500', 'dark:text-gray-400');
                rosterItem.classList.add('text-red-600', 'dark:text-red-400');
            }

            // 5. Cleanup
            messageElement.textContent = `Success! "${teamName}" registered at slot ${registeredTeamsCount}.`;
            inputField.value = ''; // Clear input field

            // 6. Check for Closure
            if (registeredTeamsCount >= MAX_TEAMS) {
                messageElement.textContent = 'League is full! Registration closed.';
                document.getElementById('registerButton').disabled = true;
                // Optionally update the registration section visibility/style here
            }
        }
 



     