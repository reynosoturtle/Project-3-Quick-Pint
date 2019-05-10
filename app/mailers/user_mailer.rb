class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to Quick Pint!')
  end

  def create
    @user = User.new(user_params)
      if @user.save
        UserMailer.welcome_email(@user).deliver_now
      end
  end

end
