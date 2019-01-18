pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }

    stage('test') {
      agent {
        docker { 
          image 'cypress/base:10' 
          args '--network=redblue_master_voting'
        }
      }
      steps {
        sh './test.sh'
      }
    }

    stage('deploy') {
      def remote = [:]
      remote.user = "maro"
      remote.host = "redblue.doremicraft.com"
      steps {
        sshCommand remote:remote command: 'ls -al'
      }
    }
  }
}
