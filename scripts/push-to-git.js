import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function pushToGit() {
  try {
    console.log('Starting git push process...');
    
    // Configure git user
    console.log('Configuring git...');
    await execAsync('git config user.email "ndshaikh0791@gmail.com"');
    await execAsync('git config user.name "Pranaus Hotel Management"');
    
    // Add all files
    console.log('Adding all files...');
    await execAsync('git add .');
    
    // Commit changes
    console.log('Committing changes...');
    const commitMessage = 'Pranaus Hotel Management System - Complete frontend build with React components, animations, and responsive design';
    await execAsync(`git commit -m "${commitMessage}"`);
    
    // Push to remote
    console.log('Pushing to GitHub...');
    await execAsync('git push origin hotel-management-app');
    
    console.log('✓ Successfully pushed code to GitHub!');
    console.log('Repository: ndshaikh0791/Hotel-Management');
    console.log('Branch: hotel-management-app');
    
  } catch (error) {
    console.error('Error during git push:', error.message);
    process.exit(1);
  }
}

pushToGit();
