class UserMailer < ApplicationMailer
#This is a mailer. They also have methods called 'actions' and use views to structure the content
  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to Quick Pint!')
  end



end
