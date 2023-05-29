module ApiException
    class UserError < ApiException::BaseException
      class UserAlreadyExists < ApiException::UserError
        def initialize
          super("User with this phone or email already exists", 400)
        end
      end
    end
  end
  