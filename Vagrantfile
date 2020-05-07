# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/xenial64"
  config.vm.provision :shell, :inline => "sudo rm /etc/localtime && sudo ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime", run: "always"
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end

  config.vm.network "forwarded_port", host_ip: "127.0.0.1", guest: 8080, host: 8080

  config.vm.provision "shell", inline: <<-SHELL
    # Update and upgrade the server packages.
    sudo apt-get update
    sudo apt-get -y upgrade

    # Set Ubuntu Language
    sudo locale-gen en_GB.UTF-8

    # Install Python, SQLite and pip
    sudo apt-get install -y python3-dev sqlite python-pip libpq-dev postgresql postgresql-contrib 

    # Upgrade pip to the latest version.
    sudo pip install --upgrade pip

    # Setup Java & ElasticSearch
    # Install it manually from https://www.rosehosting.com/blog/install-and-configure-the-elk-stack-on-ubuntu-16-04/
    # (if pb with installing java8 : https://askubuntu.com/questions/1140742/package-oracle-java8-installer-has-no-installation-candidate)

    # Install npm (https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
    sudo apt-get install nodejs

    # Install Chromedirver via https://gist.github.com/ziadoz/3e8ab7e944d02fe872c3454d17af31a5

    # Install and configure python virtualenvwrapper.
    sudo pip install virtualenvwrapper
    if ! grep -q VIRTUALENV_ALREADY_ADDED /home/vagrant/.bashrc; then
        echo "# VIRTUALENV_ALREADY_ADDED" >> /home/vagrant/.bashrc
        echo "WORKON_HOME=~/.virtualenvs" >> /home/vagrant/.bashrc
        echo "PROJECT_HOME=/vagrant" >> /home/vagrant/.bashrc
        echo "source /usr/local/bin/virtualenvwrapper.sh" >> /home/vagrant/.bashrc
    fi
  SHELL

end

