# Setting Up

### get `brew`

[Brew](http://brew.sh/) is the missing package manager for MacOS.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install wget
```

### get a nice new terminal

```
wget https://raw.githubusercontent.com/Droogans/dotfiles/mac/.git-prompt.sh > ~/.git-prompt.sh
wget https://raw.githubusercontent.com/Droogans/dotfiles/mac/.bash_aliases > ~/.bash_aliases
wget https://raw.githubusercontent.com/Droogans/dotfiles/mac/.git-completion.sh > ~/.git-completion.sh
echo "source ~/.bash_aliases\nsource ~/.git-prompt.sh\nsource ~/.git-completion.sh" >> ~/.bash_profile
```

Close/reopen your terminal.

### get setup with github

[Make a profile](https://github.com/join) on github.

Generate a new ssh key

```
ssh-keygen -t rsa -C "james.yates3@gmail.com"
```

Name it `github_rsa` or something so you know where the key goes.
You can leave the password blank if you don't want to have to enter it every time. Otherwise, make the password pretty short and quick.

```
pbcopy < ~/.ssh/github_rsa.pub
```

Go to https://github.com/settings/ssh, and "Add SSH key".

Title it something like "Home Mac".

Paste the public key in the "Key" area.

Never share, post, or save your private key (`~/.ssh/github_rsa`) under *any* circumstances.

### get this repo installed

```
mkdir ~/blog && cd ~/blog
git clone git@github.com:emergencesound/emergencesound.github.io.git
cd ./emergencesound.github.io.git
```

### get ruby and jekyll set up

```
brew install rbenv ruby-build rbenv-gem-rehash
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
rbenv init -
rbenv install 1.9.3p448
rbenv global 1.9.3p448
gem update
gem install jekyll bundler
```

### get this repo set up

```
bundle install
bundle exec guard
jekyll serve --watch
```

Open [your local version](http://localhost:4000/) of the site, start editing the css/html, and save it.


### further reading

http://jekyllrb.com/docs/structure/

Just keep hitting next and reading up on how the `.yml` files generate the site, and how to edit the pages there.
